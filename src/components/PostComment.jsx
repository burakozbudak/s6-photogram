/* Post componentından buraya neleri props olarak gönderdin? Onları burada kullan. */
export default function PostComment(/* kodlar buraya */ { comment }) {
  /* yorum sahibinin adı ve yorumu props'tan kullanılmalı */
  const { username, text } = comment; // Bu satırı yorumdan çıkarabilirsin, örnek olması için yazıldı.

  return (
    <p className="post-comment">
      <span>{username}</span> {/* username */}
      <span className="sep">&middot;</span>
      {text} {/* comment.text */}
    </p>
  );
}
