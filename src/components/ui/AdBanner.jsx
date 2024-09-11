import { useState, useEffect } from "react"

const sampleAds = [
  {
    type: "image",
    content: "/placeholder.svg?height=200&width=400",
    link: "https://example.com/ad1",
    title: "Special Offer!",
    description: "Click here for amazing deals"
  },
  {
    type: "text",
    content: "Discover our new products today!",
    link: "https://example.com/ad2",
    title: "New Arrivals"
  },
  {
    type: "video",
    content: "https://example.com/ad-video.mp4",
    link: "https://example.com/ad3"
  }
]

export default function AdBanner() {
  const [currentAd, setCurrentAd] = useState(null)

  useEffect(() => {
    // Randomly select an ad
    const randomAd = sampleAds[Math.floor(Math.random() * sampleAds.length)]
    setCurrentAd(randomAd)
  }, [])

  if (!currentAd) return null

  return (
    <div className="w-full max-w-md mx-auto overflow-hidden">
      <div className="p-4">
        {currentAd.type === "image" && (
          <a href={currentAd.link} target="_blank" rel="noopener noreferrer">
            <img
              src={currentAd.content}
              alt={currentAd.title || "Advertisement"}
              className="w-full h-auto"
              style={{ aspectRatio: "400/200", objectFit: "cover" }}
            />
            {currentAd.title && (
              <h3 className="mt-2 text-lg font-semibold">{currentAd.title}</h3>
            )}
            {currentAd.description && (
              <p className="mt-1 text-sm text-gray-600">
                {currentAd.description}
              </p>
            )}
          </a>
        )}
        {currentAd.type === "text" && (
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">{currentAd.title}</h3>
            <p className="mb-4">{currentAd.content}</p>
            <span asChild>
              <a
                href={currentAd.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </span>
          </div>
        )}
        {currentAd.type === "video" && (
          <a href={currentAd.link} target="_blank" rel="noopener noreferrer">
            <video controls className="w-full">
              <source src={currentAd.content} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </a>
        )}
      </div>
    </div>
  )
}
