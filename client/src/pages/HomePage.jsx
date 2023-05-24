import React from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import { useGetAllResumesQuery } from "../feature/api";

const HomePage = () => {
  const { data, isLoading, error } = useGetAllResumesQuery;
  console.log(data);
  return (
    <MasterLayout>
      <Hero />
      <Feature />
      {/* <PDFFile /> */}
    </MasterLayout>
  );
};

export default HomePage;
