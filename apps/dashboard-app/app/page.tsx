import { NavBar, Page, Paper } from "@packages/common-components";

export default function Home() {
  return (
    <Page>
      <NavBar
        title="Dashboard"
        sidebarComponent={
          <Paper className="w-md">
            <p className="p-2 mb-2 rounded-sm border">Item 1</p>
            <p className="p-2 mb-2 rounded-sm border">Item 2</p>
            <p className="p-2 mb-2 rounded-sm border">Item 3</p>
            <p className="p-2 mb-2 rounded-sm border">Item 4</p>
            <p className="p-2 mb-2 rounded-sm border">Item 4</p>
            <p className="p-2 mb-2 rounded-sm border">Item 4</p>
            <p className="p-2 mb-2 rounded-sm border">Item 4</p>
            <p className="p-2 mb-2 rounded-sm border">Item 4</p>
            <p className="p-2 mb-2 rounded-sm border">Item 4</p>
            <p className="p-2 mb-2 rounded-sm border">Item 4</p>
            <p className="p-2 mb-2 rounded-sm border">Item 4</p>
          </Paper>
        }
        userMenuComponent={
          <Paper className="w-sm">
            User Menu
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
            <p>Item 4</p>
          </Paper>
        }
      />
      <Paper>
        <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
        <p>This is the main content area of the dashboard.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita
          magni cumque, molestiae eligendi, earum nemo nam tenetur, eos quaerat
          optio eius. Temporibus, atque. Facilis minus maiores in nemo
          praesentium?
        </p>
        <p className="p-2 mb-2 rounded-sm border">Item 1</p>
        <p className="p-2 mb-2 rounded-sm border">Item 2</p>
        <p className="p-2 mb-2 rounded-sm border">Item 3</p>
        <p className="p-2 mb-2 rounded-sm border">Item 4</p>
        <p className="p-2 mb-2 rounded-sm border">Item 4</p>
        <p className="p-2 mb-2 rounded-sm border">Item 4</p>
        <p className="p-2 mb-2 rounded-sm border">Item 4</p>
        <p className="p-2 mb-2 rounded-sm border">Item 4</p>
        <p className="p-2 mb-2 rounded-sm border">Item 4</p>
        <p className="p-2 mb-2 rounded-sm border">Item 4</p>
        <p className="p-2 mb-2 rounded-sm border">Item 4</p>
      </Paper>
      <Paper>
        <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
        <p>This is the main content area of the dashboard.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita
          magni cumque, molestiae eligendi, earum nemo nam tenetur, eos quaerat
          optio eius. Temporibus, atque. Facilis minus maiores in nemo
          praesentium?
        </p>
        <p className="p-2 mb-2 rounded-sm border">Item 1</p>
        <p className="p-2 mb-2 rounded-sm border">Item 2</p>
        <p className="p-2 mb-2 rounded-sm border">Item 3</p>
        <p className="p-2 mb-2 rounded-sm border">Item 4</p>
        <p className="p-2 mb-2 rounded-sm border">Item 4</p>
        <p className="p-2 mb-2 rounded-sm border">Item 4</p>
        <p className="p-2 mb-2 rounded-sm border">Item 4</p>
        <p className="p-2 mb-2 rounded-sm border">Item 4</p>
        <p className="p-2 mb-2 rounded-sm border">Item 4</p>
        <p className="p-2 mb-2 rounded-sm border">Item 4</p>
        <p className="p-2 mb-2 rounded-sm border">Item 4</p>
      </Paper>
    </Page>
  );
}
