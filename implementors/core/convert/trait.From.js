(function() {var implementors = {};
implementors["socket2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.58.1/std/net/addr/enum.SocketAddr.html\" title=\"enum std::net::addr::SocketAddr\">SocketAddr</a>&gt; for <a class=\"struct\" href=\"socket2/struct.SockAddr.html\" title=\"struct socket2::SockAddr\">SockAddr</a>","synthetic":false,"types":["socket2::sockaddr::SockAddr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/std/net/addr/struct.SocketAddrV4.html\" title=\"struct std::net::addr::SocketAddrV4\">SocketAddrV4</a>&gt; for <a class=\"struct\" href=\"socket2/struct.SockAddr.html\" title=\"struct socket2::SockAddr\">SockAddr</a>","synthetic":false,"types":["socket2::sockaddr::SockAddr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/std/net/addr/struct.SocketAddrV6.html\" title=\"struct std::net::addr::SocketAddrV6\">SocketAddrV6</a>&gt; for <a class=\"struct\" href=\"socket2/struct.SockAddr.html\" title=\"struct socket2::SockAddr\">SockAddr</a>","synthetic":false,"types":["socket2::sockaddr::SockAddr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/std/net/tcp/struct.TcpStream.html\" title=\"struct std::net::tcp::TcpStream\">TcpStream</a>&gt; for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>","synthetic":false,"types":["socket2::socket::Socket"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/std/net/tcp/struct.TcpListener.html\" title=\"struct std::net::tcp::TcpListener\">TcpListener</a>&gt; for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>","synthetic":false,"types":["socket2::socket::Socket"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/std/net/udp/struct.UdpSocket.html\" title=\"struct std::net::udp::UdpSocket\">UdpSocket</a>&gt; for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>","synthetic":false,"types":["socket2::socket::Socket"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/std/net/tcp/struct.TcpStream.html\" title=\"struct std::net::tcp::TcpStream\">TcpStream</a>","synthetic":false,"types":["std::net::tcp::TcpStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/std/net/tcp/struct.TcpListener.html\" title=\"struct std::net::tcp::TcpListener\">TcpListener</a>","synthetic":false,"types":["std::net::tcp::TcpListener"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/std/net/udp/struct.UdpSocket.html\" title=\"struct std::net::udp::UdpSocket\">UdpSocket</a>","synthetic":false,"types":["std::net::udp::UdpSocket"]},{"text":"impl&lt;'s, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.58.1/std/primitive.reference.html\">&amp;'s </a>S&gt; for <a class=\"struct\" href=\"socket2/struct.SockRef.html\" title=\"struct socket2::SockRef\">SockRef</a>&lt;'s&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a>,&nbsp;</span>","synthetic":false,"types":["socket2::sockref::SockRef"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/std/os/unix/net/stream/struct.UnixStream.html\" title=\"struct std::os::unix::net::stream::UnixStream\">UnixStream</a>&gt; for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>","synthetic":false,"types":["socket2::socket::Socket"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/std/os/unix/net/listener/struct.UnixListener.html\" title=\"struct std::os::unix::net::listener::UnixListener\">UnixListener</a>&gt; for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>","synthetic":false,"types":["socket2::socket::Socket"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/std/os/unix/net/datagram/struct.UnixDatagram.html\" title=\"struct std::os::unix::net::datagram::UnixDatagram\">UnixDatagram</a>&gt; for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>","synthetic":false,"types":["socket2::socket::Socket"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/std/os/unix/net/stream/struct.UnixStream.html\" title=\"struct std::os::unix::net::stream::UnixStream\">UnixStream</a>","synthetic":false,"types":["std::os::unix::net::stream::UnixStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/std/os/unix/net/listener/struct.UnixListener.html\" title=\"struct std::os::unix::net::listener::UnixListener\">UnixListener</a>","synthetic":false,"types":["std::os::unix::net::listener::UnixListener"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/std/os/unix/net/datagram/struct.UnixDatagram.html\" title=\"struct std::os::unix::net::datagram::UnixDatagram\">UnixDatagram</a>","synthetic":false,"types":["std::os::unix::net::datagram::UnixDatagram"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.58.1/std/primitive.i32.html\">i32</a>&gt; for <a class=\"struct\" href=\"socket2/struct.Domain.html\" title=\"struct socket2::Domain\">Domain</a>","synthetic":false,"types":["socket2::Domain"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"socket2/struct.Domain.html\" title=\"struct socket2::Domain\">Domain</a>&gt; for c_int","synthetic":false,"types":["libc::unix::c_int"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.58.1/std/primitive.i32.html\">i32</a>&gt; for <a class=\"struct\" href=\"socket2/struct.Type.html\" title=\"struct socket2::Type\">Type</a>","synthetic":false,"types":["socket2::Type"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"socket2/struct.Type.html\" title=\"struct socket2::Type\">Type</a>&gt; for c_int","synthetic":false,"types":["libc::unix::c_int"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.58.1/std/primitive.i32.html\">i32</a>&gt; for <a class=\"struct\" href=\"socket2/struct.Protocol.html\" title=\"struct socket2::Protocol\">Protocol</a>","synthetic":false,"types":["socket2::Protocol"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"socket2/struct.Protocol.html\" title=\"struct socket2::Protocol\">Protocol</a>&gt; for c_int","synthetic":false,"types":["libc::unix::c_int"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()