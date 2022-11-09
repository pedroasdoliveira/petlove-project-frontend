import { useSpecialties } from "../../contexts/specialties";
import { useState } from "react";
import AllUserListTable from "components/AllUserListTable/AllUserListTable";
import AllUserListMenu from "components/AllUserListMenu/AllUserListMenu";

const AllUserList = () => {
  const { specialties } = useSpecialties();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [order, setOrder] = useState("asc");

  return (
    <>
      {/* Menu para pesquisas */}

      <AllUserListMenu
        specialties={specialties}
        filter={filter}
        search={search}
        setFilter={setFilter}
        setSearch={setSearch}
        setOrder={setOrder}
      />
      {/* Tabela com os usuarios */}

      <AllUserListTable
        order={order}
        specialties={specialties}
        filter={filter}
        search={search}
      />
    </>
  );
};

export default AllUserList;
