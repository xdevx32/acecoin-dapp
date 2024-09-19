package com.acecoin.coin_svc;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

/**
 * Represents a request to transfer coins from one address to another.
 */
public class TransferRequest {

    @NotBlank(message = "Source address must not be blank")
    private String fromAddress;

    @NotBlank(message = "Destination address must not be blank")
    private String toAddress;

    @NotNull(message = "Amount must not be null")
    @Min(value = 0, message = "Amount must be greater than zero")
    private Double amount;

    private String memo;

    // Default constructor
    public TransferRequest() {
    }

    // Parameterized constructor
    public TransferRequest(String fromAddress, String toAddress, Double amount, String memo) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
        this.memo = memo;
    }

    // Getters and Setters

    public String getFromAddress() {
        return fromAddress;
    }

    public void setFromAddress(String fromAddress) {
        this.fromAddress = fromAddress;
    }

    public String getToAddress() {
        return toAddress;
    }

    public void setToAddress(String toAddress) {
        this.toAddress = toAddress;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }

    @Override
    public String toString() {
        return "TransferRequest{" +
                "fromAddress='" + fromAddress + '\'' +
                ", toAddress='" + toAddress + '\'' +
                ", amount=" + amount +
                ", memo='" + memo + '\'' +
                '}';
    }
}
