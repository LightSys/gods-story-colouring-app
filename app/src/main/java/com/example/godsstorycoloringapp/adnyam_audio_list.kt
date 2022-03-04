package com.example.godsstorycoloringapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class adnyam_audio_list : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_adnyam_audio_list)

        val audiOne = findViewById<Button>(R.id.audio1)
        audiOne.setOnClickListener(){
            val intent = Intent(this, adnyam_audio_list::class.java)
            startActivity(intent)
        }
    }
}