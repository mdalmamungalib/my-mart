import CustomDataTable from "@/components/backoffice/CustomDataTable/CustomDataTable";
import DashboardCharts from "@/components/backoffice/DashboardCharts/DashboardCharts";
import Heading from "@/components/backoffice/Heading/Heading";
import LargeCard from "@/components/backoffice/LargeCard/LargeCard";
import SmallCard from "@/components/backoffice/SmallCard/SmallCard";
import React from "react";

const page = () => {
  return (
    <div className="space-y-10">
      {/* heading */}
      <Heading title={"Dashboard Overview"} />
      {/* large cards */}
      <LargeCard/>
      {/* small cards */}
      <SmallCard/>
      {/* charts */}
      <DashboardCharts/>
      {/* recent orders */}
      <CustomDataTable/>
    </div>
  );
};

export default page;
