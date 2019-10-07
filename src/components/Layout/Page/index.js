import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonPage,
  IonRow,
  IonCol,
  IonGrid
} from '@ionic/react';

export const Page = ({ title, form, children }) => (
  <IonPage>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle className="ion-text-center" style={{ fontSize: 30 }}>
          {title}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {!form && children}
        {form && (
          <IonGrid style={{ margin: 0 }}>
            <IonRow>
              <IonCol
                sizeXs={12}
                sizeSm={10}
                offsetSm={1}
                sizeMd={8}
                offsetMd={2}
                sizeLg={6}
                offsetLg={3}
                sizeXl={6}
                offsetXl={3}
              >
                <IonCard>
                  <IonCardContent>{children}</IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        )}
      </IonCardContent>
    </IonCard>
  </IonPage>
);