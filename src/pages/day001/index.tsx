import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Day001 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/day001/login", { replace: true });
  }, [navigate]);

  return null;
};

export default Day001;
