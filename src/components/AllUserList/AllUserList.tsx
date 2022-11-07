import { useSpecialtyss } from "../../contexts/specialtyss";
import { useState } from "react";
import AllUserListTable from "components/AllUserListTable/AllUserListTable";
import AllUserListMenu from "components/AllUserListMenu/AllUserListMenu";

const AllUserList = () => {
  const { specialtyss } = useSpecialtyss();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [order, setOrder] = useState("asc");

  return (
    <>
      {/* Menu para pesquisas */}

      <AllUserListMenu
        specialtyss={specialtyss}
        filter={filter}
        search={search}
        setFilter={setFilter}
        setSearch={setSearch}
        setOrder={setOrder}
      />
      {/* Tabela com os usuarios */}

      <AllUserListTable
        order={order}
        specialtyss={specialtyss}
        filter={filter}
        search={search}
      />
    </>
  );
};

export default AllUserList;
