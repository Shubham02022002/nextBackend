export default function Layout({ children }: LayoutProps<"/auth">) {
  return (
    <div className="border-b text-center">
      {/* <h2>20% off for next 3 days!!</h2> */}
      {children}
    </div>
  );
}
