"use client";
import {
  BarChartComponent,
  LineChartComponent,
  Menu,
  MenuProps,
  NavBar,
  Page,
  Paper,
  PieChartComponent,
  RadarChartComponent,
  RadialChartComponent,
  Row,
} from "@packages/common-components";

const menuItems: MenuProps["items"] = [
  { icon: "user", label: "Profile" },
  { icon: "settings", label: "Settings" },
  { icon: "signOut", label: "Logout" },
];

const fakeData = [
  {
    name: "Page A",
    uv: 400,
    pf: 240,
    pv: 240,
  },
  {
    name: "Page B",
    uv: 300,
    pf: 139,
    pv: 139,
  },
  {
    name: "Page C",
    uv: 200,
    pf: 480,
    pv: 229,
  },
  {
    name: "Page D",
    uv: 278,
    pf: 390,
    pv: 390,
  },
  {
    name: "Page E",
    uv: 189,
    pf: 480,
    pv: 520,
  },
];

export default function Home() {
  return (
    <Page>
      <NavBar
        title="Dashboard"
        sidebarComponent={<Menu items={menuItems} />}
        userMenuComponent={<Menu items={menuItems} />}
      />
      <Row responsive="lg">
        <Paper>
          <BarChartComponent
            data={fakeData}
            yField="name"
            dataFields={["uv", "pf", "pv"]}
          />
        </Paper>
        <Paper>
          <BarChartComponent
            data={fakeData}
            xField="name"
            dataFields={["uv", "pf", "pv"]}
          />
        </Paper>
      </Row>
      <Row responsive="lg">
        <Paper>
          <LineChartComponent
            data={fakeData}
            xField="name"
            dataFields={["uv", "pf", "pv"]}
          />
        </Paper>
        <Paper>
          <PieChartComponent data={fakeData} nameField="name" dataField="uv" />
        </Paper>
      </Row>
      <Row responsive="lg">
        <Paper>
          <RadarChartComponent
            data={fakeData}
            nameField="name"
            dataFields={["uv", "pf", "pv"]}
          />
        </Paper>
        <Paper>
          <RadialChartComponent data={fakeData} dataField="uv" />
        </Paper>
      </Row>
    </Page>
  );
}
