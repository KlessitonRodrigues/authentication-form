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
  Text,
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
    pv: 240,
    amt: 240,
  },
  {
    name: "Page B",
    uv: 300,
    pv: 139,
    amt: 221,
  },
  {
    name: "Page C",
    uv: 200,
    pv: 480,
    amt: 229,
  },
  {
    name: "Page D",
    uv: 278,
    pv: 390,
    amt: 200,
  },
  {
    name: "Page E",
    uv: 189,
    pv: 480,
    amt: 218,
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
            dataFields={["uv", "pv", "amt"]}
          />
        </Paper>
        <Paper>
          <BarChartComponent
            data={fakeData}
            xField="name"
            dataFields={["uv", "pv", "amt"]}
          />
        </Paper>
      </Row>
      <Row responsive="lg">
        <Paper>
          <LineChartComponent
            data={fakeData}
            xField="name"
            dataFields={["uv", "pv", "amt"]}
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
            dataFields={["uv", "pv", "amt"]}
          />
        </Paper>
        <Paper>
          <RadialChartComponent data={fakeData} dataField="uv" />
        </Paper>
      </Row>
    </Page>
  );
}
