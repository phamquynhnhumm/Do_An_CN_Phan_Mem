import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

export default function GioHangUpdate({ UI, id, onCreate }) {
  const [onUpdateGioHang, resultUpdateGioHang] = useMutation(gql`
    mutation($id: ID!) {
        updateGiohang (
         id: $id
          data: { chiTietDonHang: {disconnectAll: true} }
        ) {
          id
          chiTietDonHang {
            id
          }
        }
      }
  `);


  const onUpdate = (e) => {
    onUpdateGioHang({
      variables: {
        id: id,
      },
    })
      .then((data) => {
        // console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (resultUpdateGioHang.loading) return "Loading...";

  return (
    <UI
      onCreate={onCreate}
      onUpdate={onUpdate}
    />
  );
}
