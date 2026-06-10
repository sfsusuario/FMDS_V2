<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    {{-- Páginas estáticas --}}
    <url>
        <loc>{{ url('/') }}</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>{{ url('/proyectos') }}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>{{ url('/noticias') }}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>{{ url('/espiritualidad') }}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>{{ url('/apoyanos') }}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>{{ url('/contacto') }}</loc>
        <changefreq>yearly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>{{ url('/DIAN-ESAL') }}</loc>
        <changefreq>yearly</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>{{ url('/codigo_etico') }}</loc>
        <changefreq>yearly</changefreq>
        <priority>0.5</priority>
    </url>

    {{-- Proyectos --}}
    @foreach ($projects as $project)
    <url>
        <loc>{{ url('/proyecto/' . $project->id) }}</loc>
        <lastmod>{{ $project->updated_at->toAtomString() }}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    @endforeach

    {{-- Noticias --}}
    @foreach ($news as $article)
    <url>
        <loc>{{ url('/noticias/' . $article->slug) }}</loc>
        <lastmod>{{ $article->updated_at->toAtomString() }}</lastmod>
        <changefreq>never</changefreq>
        <priority>0.7</priority>
    </url>
    @endforeach

    {{-- Espiritualidad --}}
    @foreach ($spirituality as $article)
    <url>
        <loc>{{ url('/espiritualidad/' . $article->slug) }}</loc>
        <lastmod>{{ $article->updated_at->toAtomString() }}</lastmod>
        <changefreq>never</changefreq>
        <priority>0.6</priority>
    </url>
    @endforeach

</urlset>
