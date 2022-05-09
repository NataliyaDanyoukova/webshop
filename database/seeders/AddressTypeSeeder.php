<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddressTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('address_types')->insert([
            'name' => 'billing address',
            'created_at' => date('Y-m-d H:i:s')
        ]);
        DB::table('address_types')->insert([
            'name' => 'shipping address',
            'created_at' => date('Y-m-d H:i:s')
        ]);
    }
}
