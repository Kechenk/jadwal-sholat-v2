import { useEffect, useState } from "react"
import dayjs from "dayjs"

const PRAYER_TIMES = [
  "Imsak",
  "Fajr",
  "Sunrise",
  "Dhuhr",
  "Asr",
  "Maghrib",
  "Isha"
]

const API_URL =
  "https://api.aladhan.com/v1/calendarByCity/2024/9?city=Surabaya&country=Indonesia&method=20"

export default function PrayTime() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error("Network error")
      }
      const result = await response.json()
      setData(result.data)
    } catch (error) {
      setError("Failed to fetch prayer times")
      console.error("Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }

  return (
    <div className="container mx-auto p-4 bg-[#908070] text-white rounded-xl">
      <PrayerTimesTable data={data} />
    </div>
  )
}

function PrayerTimesTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-lg font-bold sticky top-0 bg-[#908070]/80 backdrop-blur-sm">
            <th className="p-2">Tanggal</th>
            {PRAYER_TIMES.map(time => (
              <th key={time} className="p-2">
                {time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <PrayerTimeRow key={item.date.readable} item={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

function PrayerTimeRow({ item, index }) {
  const isEven = index % 2 === 0
  const isToday = item.date.readable === dayjs().format("DD MMM YYYY")

  return (
    <tr
      className={`
        ${isEven ? "bg-white/10" : "bg-transparent"}
        ${isToday ? "font-bold text-green-400" : ""}
      `}
    >
      <td className="p-2">{item.date.readable}</td>
      {PRAYER_TIMES.map(time => (
        <td key={time} className="p-2 text-center">
          {item.timings[time].replace("(WIB)", "")}
        </td>
      ))}
    </tr>
  )
}
