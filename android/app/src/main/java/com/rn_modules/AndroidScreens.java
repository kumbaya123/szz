package com.rn_modules;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;

import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class AndroidScreens extends ReactContextBaseJavaModule {
    private Context mContext;
    public AndroidScreens(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return "AndroidScreens";
    }
    /**
     * 页面跳转
     */
    @ReactMethod
    public void startActivityByClassName(String name){
        try{
            Activity currenActivity = getCurrentActivity();
            if(currenActivity != null){
                Class activity = Class.forName(name);
                Intent intent = new Intent(currenActivity,activity);
                currenActivity.startActivity(intent);
            }
        }catch (Exception e){
            throw new JSApplicationIllegalArgumentException("无法打开activity页面"+e.getMessage());
        }

    }
}
