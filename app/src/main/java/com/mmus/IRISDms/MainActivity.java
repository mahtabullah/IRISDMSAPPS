package com.mmus.IRISDms;

import android.content.pm.ActivityInfo;
import android.os.Bundle;

import org.apache.cordova.Config;
import org.apache.cordova.DroidGap;

public class MainActivity extends DroidGap {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        super.onCreate(savedInstanceState);
        super.loadUrl(Config.getStartUrl());
        super.loadUrl("file:///android_asset/www/login.html");
    }
}