import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <ArrowHeader 
        right={<Right isText={false}/>} 
        center={<Center isText={true} 
        text={"UserName"}/>}
      /> */}
      <div>{children}</div>
    </>
  );
};

export default Layout;
