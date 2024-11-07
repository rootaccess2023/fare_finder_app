export type Line = "lrt1" | "lrt2" | "mrt3";
export type Ticket = "sjt" | "svt";


export interface Connection {
    type: string;
    route?: number;
    location: string;
    routes?: number[];
  }
export interface Station {
    id: number;
    name: string;
    distance_from_start: number;
    connections: Connection[];
};

export interface FareDetails {
    sjt_fare: number;
    svt_fare: number;
    distance: number;
    time: number;
    start_station: Station;
    end_station: Station;
    stations_between: Station[];
    number_of_stops: number;
    direction: string;
    line: string;
    base_fare_sjt: number;
    base_fare_svt: number;
}

export interface StateContextType {
    handleFetchStations: (line: Line) => Promise<void>;
    handleFetchFare: (line: Line, startStation: number, endStation: number) => Promise<void>
    stations: Station[];
    line: Line | null;
    startStation: number | null;
    setStartStation: React.Dispatch<React.SetStateAction<number | null>>;
    endStation: number | null;
    setEndStation: React.Dispatch<React.SetStateAction<number | null>>;
    fareDetails: FareDetails | null;
    setFareDetails: React.Dispatch<React.SetStateAction<FareDetails | null>>
    setTicketType: React.Dispatch<React.SetStateAction<Ticket>>;
    ticketType: Ticket;
}

export interface FromStationsProps {
    fromQuery : string;
    setToggleFromList: React.Dispatch<React.SetStateAction<boolean>>;
    setFromQuery: React.Dispatch<React.SetStateAction<string>>;
    setToggleButton: React.Dispatch<React.SetStateAction<boolean>>
}

export interface FromStationsListProps {
    fromQuery : string;
    setToggleFromList: React.Dispatch<React.SetStateAction<boolean>>;
    setFromQuery: React.Dispatch<React.SetStateAction<string>>;
}

export interface ToStationsListProps {
    toQuery : string;
    setToggleToList: React.Dispatch<React.SetStateAction<boolean>>;
    setToQuery: React.Dispatch<React.SetStateAction<string>>;
}

export interface TrainLineProps {
    setToQuery: React.Dispatch<React.SetStateAction<string>>;
    setFromQuery: React.Dispatch<React.SetStateAction<string>>;
    setToggleButton: React.Dispatch<React.SetStateAction<boolean>>
    toggleButton?: boolean;
    fromQuery? : string;
    toQuery? : string;
}

export interface DetailsHeaderProps {
    handleSaveImage: () => void;
}