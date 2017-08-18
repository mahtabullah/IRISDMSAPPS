function sync_all_down() {
    $.mobile.loading('show');
    update_outlet();
    alert('Done');
    window.open('Home/Home.html', '_self', 'location=yes');
    
    
}

