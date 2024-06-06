import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CampaignReportList } from "./campaignReport/CampaignReportList";
import { CampaignReportCreate } from "./campaignReport/CampaignReportCreate";
import { CampaignReportEdit } from "./campaignReport/CampaignReportEdit";
import { CampaignReportShow } from "./campaignReport/CampaignReportShow";
import { RecipientList } from "./recipient/RecipientList";
import { RecipientCreate } from "./recipient/RecipientCreate";
import { RecipientEdit } from "./recipient/RecipientEdit";
import { RecipientShow } from "./recipient/RecipientShow";
import { EmailTemplateList } from "./emailTemplate/EmailTemplateList";
import { EmailTemplateCreate } from "./emailTemplate/EmailTemplateCreate";
import { EmailTemplateEdit } from "./emailTemplate/EmailTemplateEdit";
import { EmailTemplateShow } from "./emailTemplate/EmailTemplateShow";
import { CampaignList } from "./campaign/CampaignList";
import { CampaignCreate } from "./campaign/CampaignCreate";
import { CampaignEdit } from "./campaign/CampaignEdit";
import { CampaignShow } from "./campaign/CampaignShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MailCampaign"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CampaignReport"
          list={CampaignReportList}
          edit={CampaignReportEdit}
          create={CampaignReportCreate}
          show={CampaignReportShow}
        />
        <Resource
          name="Recipient"
          list={RecipientList}
          edit={RecipientEdit}
          create={RecipientCreate}
          show={RecipientShow}
        />
        <Resource
          name="EmailTemplate"
          list={EmailTemplateList}
          edit={EmailTemplateEdit}
          create={EmailTemplateCreate}
          show={EmailTemplateShow}
        />
        <Resource
          name="Campaign"
          list={CampaignList}
          edit={CampaignEdit}
          create={CampaignCreate}
          show={CampaignShow}
        />
      </Admin>
    </div>
  );
};

export default App;
