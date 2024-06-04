import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { MyBurrowTable } from "../../components/tables/myBurrowTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchBurrowsAction } from "../../features/burrow/burrowAction";

const MyBurrow = () => {
  const dispatch = useDispatch();
  const { burrows } = useSelector((state) => state.burrowInfo);
  useEffect(() => {
    dispatch(fetchBurrowsAction());
  }, [dispatch]);
  return (
    <UserLayout pageTitle={"My burrow list"}>
      <MyBurrowTable burrows={burrows} />
    </UserLayout>
  );
};

export default MyBurrow;
