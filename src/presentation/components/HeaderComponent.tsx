import { Layout, Menu } from "antd";
import { Outlet, NavLink } from "react-router-dom";

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Layout>
      <Header className="bg-white">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center">
          <h5 className="font-bold text-center text-lg">
            <NavLink to={"/"}>NEWS APP</NavLink>
          </h5>
          <div>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: 1,
                  label: "Home"
                }
              ]}
            />
          </div>
        </div>
      </Header>
      <Outlet />
    </Layout>
  );
};

export default HeaderComponent;
