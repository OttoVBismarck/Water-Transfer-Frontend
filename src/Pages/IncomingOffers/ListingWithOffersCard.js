import React from 'react';
import {
  IonCard,
  IonCol,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton
} from '@ionic/react';

export const ListingWithOffersCard = ({ listing, offers }) => {
  const relevantOffers = offers.filter(offer => {
    if (offer.parentListingId === listing._id) {
      return true;
    }
    return false;
  });
  return (
    <IonCol sizeXs={12} sizeSm={8} sizeMd={6} sizeLg={6} sizeXl={4}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle className='ion-text-center'>
            {listing.volume} AF for ${listing.price}/AF
          </IonCardTitle>
          <IonCardSubtitle className='ion-text-center'>
            {listing.waterType}
          </IonCardSubtitle>
        </IonCardHeader>
        {}
        <IonCardContent className='ion-text-center'>
          {relevantOffers.length > 0 && (
            <IonButton>
              View {relevantOffers.length} Offer
              {relevantOffers.length > 1 && 's'}
            </IonButton>
          )}
          {relevantOffers.length === 0 && (
            <IonButton color='medium'>No Offers</IonButton>
          )}
        </IonCardContent>
      </IonCard>
    </IonCol>
  );
};
