import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Spinner from "../components/Spinner";

const CreateListing = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  // we set default values and will give the option to the user to change them
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longitude: 0,
  });
  // for user to enter coordinates manually (without map API)
  const [geolocationEnabled, setGeolocationEnabled] = useState(true);

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      // add current user id to form data
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid });
        } else {
          navigate("/sign-in");
        }
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div>Create</div>
    </>
  );
};

export default CreateListing;
