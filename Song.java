public class Song {
    private String title;
    private String artist;
    private int duration;

    public Song(String title, String artist, int duration) {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
    }

    public boolean equals(Object compared) {
        if (!(compared instanceof Song)) {
            return false;
        }

        Song comparedSong = (Song) compared;

        if (this.title.equals(comparedSong.title)) {
            if (this.artist.equals(comparedSong.artist)) {
                if (this.duration == comparedSong.duration) {
                    return true;
                }
            }
        }

        return false;
    }
}
