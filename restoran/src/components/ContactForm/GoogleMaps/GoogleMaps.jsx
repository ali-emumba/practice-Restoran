// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
// import React from "react";
// import styles from "./styles.module.css";

// const containerStyle = {
//   // flex: "1",
//   width: "100%",
//   height: "23.1875rem",
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

// function GoogleMaps() {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "YOUR_API_KEY",
//   });

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   return (
//     <div className={styles.wrapper}>
//       {isLoaded ? (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={10}
//           onLoad={onLoad}
//           onUnmount={onUnmount}
//         >
//           {/* Child components, such as markers, info windows, etc. */}
//           <></>
//         </GoogleMap>
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// }

// export default React.memo(GoogleMaps);

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import styles from "./styles.module.css";

const GoogleMaps = () => {
  const position = { lat: 37.7749295, lng: -122.4194155 };
  return (
    <div className={styles.wrapper}>
      <APIProvider apiKey={``}>
        <Map
          // style={{ height: "100%", width: "100%" }}
          defaultCenter={position}
          defaultZoom={9}
          gestureHandling={"greedy"}
          // disableDefaultUI={true}
        ></Map>
      </APIProvider>
    </div>
  );
};
export default GoogleMaps;
