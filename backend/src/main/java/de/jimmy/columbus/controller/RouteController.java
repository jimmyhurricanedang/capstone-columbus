package de.jimmy.columbus.controller;


import de.jimmy.columbus.dto.AddRouteDto;
import de.jimmy.columbus.model.Route;
import de.jimmy.columbus.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/routes")
public class RouteController {

    private final RouteService routeService;

    @Autowired
    public RouteController(RouteService routeService){
        this.routeService = routeService;
    }

    @GetMapping
    public List<Route> listRoutes() {
        return routeService.listRoutes();
    }

    @PostMapping
    public Route addRoute(@RequestBody AddRouteDto dto){
        return routeService.addRoute(dto);
    }

    @DeleteMapping("{name}")
    public void deleteRoute(@PathVariable String name) {
        routeService.deleteRouteFromList(name);
    }


}
