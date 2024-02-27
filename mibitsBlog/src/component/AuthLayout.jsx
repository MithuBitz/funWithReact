import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authState = useSelector((state) => state.auth.status);

  //Whenever any change in authentication navigate and authState then call this useEffect
  useEffect(() => {
    if (authentication && authState !== authentication) {
      navigate("/login");
    } else if (!authentication && authState !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authentication, navigate, authState]);

  return loader ? <h1>Loading..</h1> : <>{children}</>;
}
