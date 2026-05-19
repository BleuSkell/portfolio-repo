"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import "@/components/components-css/animated-underline.css"

import logo from "public/seervs-logo.png"
import label from "public/label.png"

const loadingImages = [
    { src: logo, name: "logo" },
    { src: label, name: "label" },
]

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true)
    const [loadingFinished, setLoadingFinished] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        if (!loading) return

        setTimeout(() => setLoadingFinished(true), 3000)

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % loadingImages.length)
        }, 100)

        return () => clearInterval(interval)
    }, [loading])

    const handleReady = () => {
        setLoading(false)
        sessionStorage.setItem("loadingFinished", "true")
        window.dispatchEvent(new Event("loaderHidden"))
    }

    return (
        <>
            {loading && (
                loadingFinished ? (
                    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-2 bg-primary">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={192}
                            height={192}
                            className="relative left-[10px]"
                        />

                        <button onClick={handleReady} className="font-instrument-serif text-tertiary hover:cursor-pointer animated-underline">
                            Ready to go? →
                        </button>
                    </div>
                ) : (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary">
                        <div className="relative w-48 h-48 flex items-center justify-center">
                            {loadingImages.map((image, index) => (
                                <div
                                    key={image.name}
                                    className="absolute inset-0 flex items-center justify-center"
                                    style={{
                                        opacity: index === currentImageIndex ? 1 : 0,
                                        pointerEvents: index === currentImageIndex ? "auto" : "none",
                                    }}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.name}
                                        width={192}
                                        height={192}
                                        priority={index === 0}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )
            )}
        </>
    )
}