<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id()->from(1000); // orders lower than this doesnt look great
            $table->string("userID");
            $table->string("delivery_address"); //reference to the address table. update. maybe in future versions 
            $table->string("billing_address"); // reference to the billing table. update. maybe in future versions
            $table->string("subtotal");
            $table->string("total");
            $table->string("status");
            $table->string("tax_percentage");
            $table->string("payment_method");
            $table->timestamps();
            //for products of orders we can query the table order-product table
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
