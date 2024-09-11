'use client'

import React, { useState, useEffect } from "react"
import dayjs from "dayjs"

const cities = [
  "Kabupaten Lubuk Linggau",
  "Kota Surabaya",
  "Kota Palembang",
  "Kota Palangkaraya",
  "Kab. Kepulauan Miangas Barat Daya"
]

const PRAYER_TIMES = [
  "Imsak",
  "Fajr",
  "Sunrise",
  "Dhuhr",
  "Asr",
  "Maghrib",
  "Isha"
]

function getPrevNextPrayTime(data) {
  const currentDate = dayjs()

  const todayData = data.find((item) => item.date.readable === currentDate.format("DD MMM YYYY")) || {}

  const todayPrayTimes = PRAYER_TIMES.map((name) => {
    const prayTime = todayData.timings?.[name] || ""
    const cleanPrayTime = prayTime.replace(" (WIB)", "")
    const [hour, minute] = cleanPrayTime.split(":")

    return {
      name,
      dayjs: dayjs().set("hour", parseInt(hour)).set("minute", parseInt(minute))
    }
  })

  const nextPrayTime = todayPrayTimes.find((prayTime) =>
    prayTime.dayjs.isAfter(currentDate)
  ) || todayPrayTimes[0]

  const prevPrayTimeIndex = todayPrayTimes.findIndex((prayTime) => prayTime.name === nextPrayTime.name) - 1
  const prevPrayTime = prevPrayTimeIndex >= 0 ? todayPrayTimes[prevPrayTimeIndex] : todayPrayTimes[todayPrayTimes.length - 1]

  return [prevPrayTime, nextPrayTime]
}

export default function Card() {
  const [currentCityIndex, setCurrentCityIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [data, setData] = useState([])
  const [prev, next] = getPrevNextPrayTime(data)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length)
      }, 750)

      setTimeout(() => {
        setIsAnimating(false)
      }, 1000)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.aladhan.com/v1/calendarByCity/2024/9?city=Surabaya&country=Indonesia&method=20"
      )
      if (!response.ok) {
        throw new Error("Network Error")
      }
      const result = await response.json()
      setData(result.data)
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="flex-col mx-auto py-16 sm:py-36">
      <div className="container mx-auto bg-slate-600 rounded-s-full flex flex-col md:flex-row justify-between items-stretch">
        <PrayerTimeCard
          city={cities[currentCityIndex]}
          prayerTime={prev}
          isAnimating={isAnimating}
          bgColor="bg-zinc-100"
          textColor="text-slate-800"
          isLeft={true}
        />
        <PrayerTimeCard
          city={cities[currentCityIndex]}
          prayerTime={next}
          isAnimating={isAnimating}
          bgColor="bg-transparent"
          textColor="text-white"
          isLeft={false}
        />
      </div>
    </div>
  )
}

function PrayerTimeCard({ city, prayerTime, isAnimating, bgColor, textColor, isLeft }) {
  const getImageSource = (prayerName) => {
    const prayName = prayerName.toLowerCase()
    if (prayName === "fajr") return "/img/icon/Shalat-Subuh.svg"
    if (prayName === "dhuhr") return "/img/icon/Shalat-Zhuhur.svg"
    if (prayName === "asr") return "/img/icon/Shalat-Ashar.svg"
    if (prayName === "maghrib") return "/img/icon/Shalat-Maghrib.svg"
    if (prayName === "isha") return "/img/icon/Shalat-Isya.svg"
    return "/img/icon/Shalat-Zhuhur.svg" // Default image
  }

  return (
    <div
      className={`flex items-center py-4 xs:py-2 sm:py-4 ${
        isLeft ? 'pl-6 pr-12 sm:pl-12 sm:pr-24 rounded-s-full' : 'pl-6 pr-12 sm:pl-12 sm:pr-24'
      } ${bgColor} ${textColor} flex-1`}
    >
      <img
        src={prayerTime ? getImageSource(prayerTime.name) : "/img/icon/Shalat-Zhuhur.svg"}
        alt={`Prayer time icon for ${prayerTime ? prayerTime.name : 'default'}`}
        className="w-16 h-16 xs:w-10 xs:h-10 sm:w-14 sm:h-14"
      />
      <div className="grid grid-cols-1 ml-4 sm:ml-4 sm:mr-24 xs:ml-2 xs:mr-8">
        <div className="relative w-full text-nowrap">
          <span
            className={`font-bold text-lg sm:text-xl mx-auto transition-all duration-1000 ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
            aria-live="polite"
          >
            {city}
          </span>
        </div>
        <div>
          <span id="Time" className="text-base sm:text-lg text-nowrap">
            {prayerTime ? prayerTime.name : "Loading..."}{" "}
            {prayerTime ? prayerTime.dayjs.format("HH:mm") : ""}
          </span>
          <span
            id="Hijri"
            className="text-xs sm:text-sm text-zinc-500 text-nowrap block"
          >
            {/* Hijri date can be added here if available */}
          </span>
        </div>
      </div>
    </div>
  )
}