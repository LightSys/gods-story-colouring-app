package com.example.godsstorycoloringapp

import android.os.Bundle
import android.os.PersistableBundle
import androidx.appcompat.app.AppCompatActivity
import android.view.WindowManager
import android.os.Handler
import android.content.Intent
import android.widget.Button
import android.widget.ImageButton
import android.widget.Toast

class just_audio : AppCompatActivity(){

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.just_audio)
        val backButton = findViewById<ImageButton>(R.id.imageButton1)
        backButton.setOnClickListener()
        {
            val intent = Intent(this, homescreen::class.java)
            startActivity(intent)
        }
    }
}