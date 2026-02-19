"use client";

import { useState, useEffect, useRef } from "react";
import { Loader2, MapPin } from "lucide-react";
import clsx from "clsx";

interface AddressAutocompleteProps {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    placeholder?: string;
    required?: boolean;
}

interface AddressResult {
    display_name: string;
    place_id: number;
    lat: string;
    lon: string;
}

const AddressAutocomplete = ({
    value,
    onChange,
    label = "Address",
    placeholder = "Start typing your address...",
    required = false
}: AddressAutocompleteProps) => {
    const [query, setQuery] = useState(value || "");
    const [results, setResults] = useState<AddressResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showPredictions, setShowPredictions] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Sync internal query with external value if it changes externally
    useEffect(() => {
        setQuery(value || "");
    }, [value]);

    // Handle outside click to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShowPredictions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Debounced search
    useEffect(() => {
        const timeoutId = setTimeout(async () => {
            if (query.length > 2 && showPredictions) {
                setIsLoading(true);
                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&addressdetails=1&countrycodes=za`
                    );
                    const data = await response.json();
                    setResults(data);
                } catch (error) {
                    console.error("Error fetching address:", error);
                    setResults([]);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setResults([]);
            }
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [query, showPredictions]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setQuery(newValue);
        onChange(newValue);
        setShowPredictions(true);
    };

    const handleSelectAddress = (address: string) => {
        setQuery(address);
        onChange(address);
        setShowPredictions(false);
        setResults([]);
    };

    return (
        <div className="space-y-2 relative" ref={wrapperRef}>
            <label htmlFor="address" className="block text-sm font-semibold text-gray-700 font-sora">
                {label} {required && "*"}
            </label>
            <div className="relative">
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={query}
                    onChange={handleInputChange}
                    onFocus={() => query.length > 2 && setShowPredictions(true)}
                    required={required}
                    autoComplete="off"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-raspberry focus:ring-1 focus:ring-raspberry outline-none transition-colors rounded-none font-sora text-sm pr-10"
                    placeholder={placeholder}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {isLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin text-raspberry" />
                    ) : (
                        <MapPin className="w-5 h-5" />
                    )}
                </div>

                {showPredictions && results.length > 0 && (
                    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-100 shadow-xl max-h-60 overflow-auto rounded-none">
                        {results.map((result) => (
                            <button
                                key={result.place_id}
                                type="button"
                                onClick={() => handleSelectAddress(result.display_name)}
                                className="w-full px-4 py-3 text-left hover:bg-raspberry/5 hover:text-raspberry font-sora text-sm transition-colors border-b border-gray-50 last:border-0 flex items-start gap-2 group"
                            >
                                <MapPin className="w-4 h-4 mt-0.5 text-gray-400 group-hover:text-raspberry flex-shrink-0" />
                                <span className="line-clamp-2">{result.display_name}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddressAutocomplete;
