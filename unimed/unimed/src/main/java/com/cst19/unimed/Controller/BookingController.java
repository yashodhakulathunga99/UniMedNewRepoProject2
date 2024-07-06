package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.BookingSlot;
import com.cst19.unimed.Service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/create/{patientId}")
    public BookingSlot createBooking(@PathVariable String patientId) {
        return bookingService.createBooking(patientId);
    }

    @PutMapping("/update/{bookingId}")
    public BookingSlot updateBookingStatus(@PathVariable String bookingId, @RequestParam String status) {
        return bookingService.updateBookingStatus(bookingId, status);
    }

}