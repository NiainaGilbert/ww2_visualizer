"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Search } from "lucide-react";

export default function SearchBar()
{
    const searchParams = useSearchParams();
    const path = usePathname()
    const router = useRouter();

    const handleSearch = useDebouncedCallback((term: string)=>{
        const params = new URLSearchParams(searchParams);
        if(term.trim())
        {
            params.set("q", term.trim());
        }
        else
        {
            params.delete("q");
        }
        router.replace(`${path}?${params.toString()}`);
    }, 300)
    return(
            <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Rechercher..."
                    defaultValue={searchParams.get("q") ?? ""}
                    onChange={(e) => handleSearch(e.target.value)}
                />
                </div>
    );
}