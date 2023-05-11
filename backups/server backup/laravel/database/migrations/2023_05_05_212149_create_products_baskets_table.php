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
        Schema::create('products_baskets', function (Blueprint $table) {
            $table->id();
            $table->string("user");
            $table->string("product_name");
            $table->string("sku");  
            $table->string("qty");
            $table->string("unit_price");
            $table->string("total_price");
            $table->boolean("ground"); // 1 or 0 as booleanish...
            $table->string('image_nobackground');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products_baskets');
    }
};
