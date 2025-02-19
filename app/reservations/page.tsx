import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import getReservation from "../actions/getReservations";
import ReservationsClient from "./ReservationsClient";

type Props = {};

const ReservationsPage = async (props: Props) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const reservations = await getReservation({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Reservation found"
          subtitle="Looks like you have no reservations on your properties."
        />
      </ClientOnly>
    );
  }

  // Check if a new reservation is added after payment
  const updatedReservations = await getReservation({
    authorId: currentUser.id,
  });

  return (
    <ClientOnly>
      <ReservationsClient
        reservations={updatedReservations}  // Pass updated reservations to the client
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};


export default ReservationsPage;
