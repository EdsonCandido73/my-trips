import { useRouter } from 'next/router'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import * as S from './styles'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      //attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      //attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

const markerIcon = new L.Icon({
  iconUrl: 'img/map-marker-ball.png',
  iconSize: [20, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, 0]
})

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  const screenSize =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  const smallScreenSize = screenSize < 768

  return (
    <S.MapWrapper>
      <MapContainer
        center={[0, 0]}
        zoom={smallScreenSize ? 2 : 3}
        style={{ height: '100%', width: '100%' }}
        minZoom={smallScreenSize ? 2 : 3}
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
      >
        <CustomTileLayer />

        {places?.map(({ id, name, location, slug }) => {
          const { latitude, longitude } = location

          return (
            <Marker
              key={`place-${id}`}
              position={[latitude, longitude]}
              title={name}
              //icon={markerIcon}
              eventHandlers={{
                click: () => {
                  router.push(`/place/${slug}`)
                }
              }}
            />
          )
        })}
      </MapContainer>
    </S.MapWrapper>
  )
}

export default Map
