import axios from "axios";
import { useEffect, useState } from "react";
import { WeatherData } from "../../types/types";
import { BsSunrise, BsSunset, BsWind } from "react-icons/bs";
import { IoRainyOutline } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { PiFireLight } from "react-icons/pi";
import { TbMist } from "react-icons/tb";
import { MdOutlineVisibility } from "react-icons/md";
import { BeatLoader } from "react-spinners";

export default function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Function to fetch weather data
  const fetchWeather = async (lat: number, lon: number) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7063d3f7437464d5b86892204604f7f7&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setError('Failed to fetch weather data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          (geoError) => {
            console.error('Error getting location:', geoError);
            setError('Failed to get current location. Please allow location access.');
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };

    getCurrentLocation();
  }, []);

  return (
    <div className="w-full flex p-8 font-light">
      {loading &&
      <div className="w-full flex justify-center"><BeatLoader color="#0063d3" /></div>}
      {error && <p className="text-red-500">{error}</p>}
      {weather && (
        <div className="w-full flex flex-col">
          <h2 className="text-3xl text-primary text-center font-semibold pb-4">{weather.name}</h2>
          <div className="flex flex-col gap-6">
            <section className="flex flex-col gap-2 items-center">
              <img
                className="size-32 bg-background rounded"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt={weather.weather[0].description}
                width={60}
              />
            </section>
            <div className="w-full justify-evenly flex">
                <section className="text-primary">
                    <div className="flex items-center">
                    <PiFireLight className="mr-2 text-important" />
                    <p>{weather.main.temp}°C</p>
                    </div>
                    <div className="flex items-center">
                    <TbMist className="mr-2 text-important" />
                    <p>{weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}</p>
                    </div>
                    <div className="flex items-center">
                    <MdOutlineVisibility className="mr-2 text-important" />
                    <p>{weather.visibility / 1000} km</p>
                    </div>
                </section>
              <section className="flex flex-col">
                <div className="flex items-center">
                  <IoRainyOutline className="mr-2 text-important" />
                  <p>{weather.precipitation ? `${weather.precipitation.value} mm` : 'No rain'}</p>
                </div>
                <div className="flex items-center">
                  <WiHumidity className="mr-2 text-important" />
                  <p>{weather.main.humidity}%</p>
                </div>
                <div className="flex items-center">
                  <BsWind className="mr-2 text-important" />
                  <p>{weather.wind.speed} m/s</p>
                </div>
              </section>
              <section className="flex flex-col">
                <div className="flex items-center">
                  <LiaTemperatureHighSolid className="mr-2 text-important" />
                  <p>{weather.main.feels_like}°C</p>
                </div>
                <div className="flex items-center">
                  <BsSunrise className="mr-2 text-important" />
                  <p>{new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
                <div className="flex items-center">
                  <BsSunset className="mr-2 text-important" />
                  <p>{new Date(weather.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
