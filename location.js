function mapsSelector(latitude, longitude) {
    
  // Check for iOS platform
  if ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPad") != -1) || (navigator.platform.indexOf("iPod") != -1)) {
    window.open(`maps://://maps.google.com{latitude},${longitude}&ll=`);
  }
  // Otherwise, use Google Maps URL (Android will often redirect to native app)
  else {
    window.open(`https://://maps.google.com{latitude},${longitude}&ll=`);
  }
}

function openInMaps(lat, lng, label = "") {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const address = label ? encodeURIComponent(label) : `${lat},${lng}`;

    if (isIOS) {
        // Opens Apple Maps on iOS
        window.location.href = `maps://://maps.apple.com{address}&ll=${lat},${lng}`;
    } else {
        // Opens App Selector on Android (Google Maps, Waze, etc.)
        window.location.href = `geo:${lat},${lng}?q=${address}`;
    }
}

function newopenInMaps(lat, lng, label = "") {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    
    const encodedLabel = encodeURIComponent(label);

    if (isIOS) {
        // Corrected Apple Maps URL scheme
        // Format: maps://?q=Label&ll=lat,lng or maps://?ll=lat,lng
        const appleUrl = label 
            ? `maps://?q=${encodedLabel}&ll=${lat},${lng}`
            : `maps://?ll=${lat},${lng}`;
            
        window.location.href = appleUrl;
    } else {
        // Standard Android/Universal Geo URI
        window.location.href = `geo:${lat},${lng}?q=${lat},${lng}(${encodedLabel})`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    lat = 12.962388889;
    long = 77.534638889;
    newopenInMaps(lat, long, label="SaRa Space")
});


