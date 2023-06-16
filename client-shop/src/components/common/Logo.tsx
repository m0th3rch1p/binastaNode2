import logo from "@/assets/images/flogo.png";

function Logo(props: { width?: number, height?: number} | null) {
  console.log(props?.height);
  return (
    <div><img src={logo} style={{ width: props?.width ?? "100%", height: props?.height ?? "100%"}} alt="logo" /></div>
  )
}

export default Logo