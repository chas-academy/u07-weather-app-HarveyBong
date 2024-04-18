import { create } from "zustand";

import { immer } from "zustand/middleware/immer";
interface Location {

    userLocation: {
        latitude:0,
        longitude:0,
    },



}

export const useUserLocationStore = create<Location,["zustand/immer",unknown][]>(

    immer((set)=> ({
        userLocation: {
            latitude: 0,
            longitude: 0,
        },
        updateUserLocation: (updatedLocation:any)=> set ({userLocation: updatedLocation}),
    }))
);