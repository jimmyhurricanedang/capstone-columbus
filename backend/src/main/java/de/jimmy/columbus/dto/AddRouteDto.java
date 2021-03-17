package de.jimmy.columbus.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AddRouteDto {

    private String routeName;
    private String locationName;
    private double lat;
    private double lng;
}
