export interface Station {
    id: number;
    name: string;
    distance_from_start: number;
};

export interface FareDetails {
    sjt_fare: number;
    svt_fare: number;
    distance: number;
    time: number;
    start_station: Station;
    end_station: Station;
    stations_between: Station[];
}