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
        Schema::create('web_infos', function (Blueprint $table) {
            $table->id();
            $table->text('about',2000);
            $table->text('email',200);
            $table->text('returns',2000);
            $table->text('privacy',2000);
            $table->text('address',2000);
            $table->text('copyright',1000);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('web_infos');
    }
};
