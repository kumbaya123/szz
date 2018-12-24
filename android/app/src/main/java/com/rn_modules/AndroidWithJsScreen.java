package com.rn_modules;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.szz.MainActivity;
import com.szz.R;

public class AndroidWithJsScreen extends AppCompatActivity {

    private Button btn_backRN;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_android_with_js_screen);
        btn_backRN = findViewById(R.id.btn_backRN);
        btn_backRN.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(AndroidWithJsScreen.this,MainActivity.class);
                startActivity(intent);
            }
        });
    }
}
