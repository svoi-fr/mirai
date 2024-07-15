"use client";

import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import {
  BooleanFormField,
  SectionHeader,
  TextFormField,
} from "@/components/adminPageComponents/connectors/Field";
import { Popup } from "@/components/adminPageComponents/connectors/Popup";
import { Button, Divider, Text } from "@tremor/react";

const LLMOptions = () => {
    const [popup, setPopup] = useState<{
      message: string;
      type: "success" | "error";
    } | null>(null);
  
    const [tokenBudgetGloballyEnabled, setTokenBudgetGloballyEnabled] =
      useState(false);
    const [initialValues, setInitialValues] = useState({
      enable_token_budget: false,
      token_budget: "",
      token_budget_time_period: "",
    });
  
    const fetchConfig = async () => {
      const response = await fetch("/api/manage/admin/token-budget-settings");
      if (response.ok) {
        const config = await response.json();
        setInitialValues({
          enable_token_budget: config.enable_token_budget || false,
          token_budget: config.token_budget || "",
          token_budget_time_period: config.token_budget_time_period || "",
        });
        setTokenBudgetGloballyEnabled(true);
      } else {
        setPopup({
          message: "Failed to load current LLM options.",
          type: "error",
        });
      }
    };

    const checkInteger = (value: string) => {
      return value === "" || /^[0-9]+$/.test(value)
    }

    useEffect(() => {
      fetchConfig();
    }, []);
  
    if (!tokenBudgetGloballyEnabled) {
      return null;
    }
  
    return (
      <>
        {popup && <Popup message={popup.message} type={popup.type} />}
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={async (values) => {
            const response = await fetch(
              "/api/manage/admin/token-budget-settings",
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              }
            );
            if (response.ok) {
              setPopup({
                message: "Updated LLM Options",
                type: "success",
              });
              await fetchConfig();
            } else {
              const body = await response.json();
              if (body.detail) {
                setPopup({ message: body.detail, type: "error" });
              } else {
                setPopup({
                  message: "Unable to update LLM options.",
                  type: "error",
                });
              }
              setTimeout(() => {
                setPopup(null);
              }, 4000);
            }
          }}
        >
          {({ isSubmitting, values, setFieldValue }) => {
            return (
              <Form>
                <Divider />
                <>
                  <SectionHeader>Token Budget</SectionHeader>
                  <Text>
                    Set a maximum token use per time period. If the token budget
                    is exceeded, Danswer will not be able to respond to queries
                    until the next time period.
                  </Text>
                  <br />
                  <BooleanFormField
                    name="enable_token_budget"
                    label="Enable Token Budget"
                    subtext="If enabled, Danswer will be limited to the token budget specified below."
                    onChange={(e) => {
                      setFieldValue("enable_token_budget", e.target.checked);
                    }}
                  />
                  {values.enable_token_budget && (
                    <>
                      <TextFormField
                        name="token_budget"
                        label="Token Budget"
                        subtext={
                          <div>
                            How many tokens (in thousands) can be used per time
                            period? If unspecified, no limit will be set.
                          </div>
                        }
                        onChange={(e) => {
                          const value = e.target.value;
                          if (checkInteger(value)) {
                            setFieldValue("token_budget", value);
                          }
                        }}
                      />
                      <TextFormField
                        name="token_budget_time_period"
                        label="Token Budget Time Period (hours)"
                        subtext={
                          <div>
                            Specify the length of the time period, in hours, over
                            which the token budget will be applied.
                          </div>
                        }
                        onChange={(e) => {
                          const value = e.target.value;
                          if (checkInteger(value)) {
                            setFieldValue("token_budget_time_period", value);
                          }
                        }}
                      />
                    </>
                  )}
                </>
                <div className="flex">
                  <Button
                    className="w-64 mx-auto"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </>
    );
  };
  

  export default LLMOptions;